const readline = require("readline");

class Shipping {
  #packages = [];
  #shipments = [];
  #couriers = [];

  // Package Methods

  addPackage(packages) {
    this.#packages.push(packages);
  }

  getAllPackage() {
    return this.#packages.map((pkg) => pkg.getPackageDetails());
  }

  // Courier Methods

  registerCourier(courier) {
    this.#couriers.push(courier);
  }

  // Shipment Methods

  createShippment(shipment) {
    this.#shipments.push(shipment);
  }

  getCurrentStatus(shippmentId) {
    const shipment = this.#shipments.find((ship) => ship.id === shippmentId);

    if (shipment) {
      return `Current Status of ${shipment.name} is ${shipment.status}`;
    } else {
      return `Shipment with ID ${shippmentId} not found.`;
    }
  }

  updateShippmentStatus(shippmentId) {
    const shipment = this.#shipments.find((ship) => ship.id === shippmentId);

    if (!shipment) {
      return `No Shipment found with this Id ${shippmentId}`;
    }
    shipment.status = "Delivered";
  }

  // Combined Info

  courierShippmentInfo(shippmentId, courierId) {
    const data = new Map();
    const shipment = this.#shipments.find((ship) => ship.id === shippmentId);
    const courier = this.#couriers.find((courier) => courier.id === courierId);

    if (shipment && courier) {
      data.set("shipment-details", shipment);
      data.set("courier-details", courier);
    }
    return data;
  }
}

class Packages {
  #id;
  #weight;
  #destination;

  constructor(id, weight, destination) {
    this.#id = id;
    this.#weight = weight;
    this.#destination = destination;
  }

  getPackageDetails() {
    return {
      id: this.#id,
      weight: this.#weight,
      destination: this.#destination,
    };
  }
}

class Shipment {
  #id;
  #package;
  #status;
  #courier;

  constructor(id, packages, status, courier) {
    this.#id = id;
    this.#package = packages;
    this.#status = status;
    this.#courier = courier;
  }

  getShipmentDetails() {
    return {
      id: this.#id,
      packages: this.#package,
      status: this.#status,
      courier: this.#courier,
    };
  }
}

class Courier {
  #id;
  #name;
  #vehicle;

  constructor(id, name, vehicle) {
    this.#id = id;
    this.#name = name;
    this.#vehicle = vehicle;
  }

  getCourierDetails() {
    return {
      id: this.#id,
      name: this.#name,
      vehicle: this.#vehicle,
    };
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const shipping = new Shipping();

const mainMenu = () => {
  console.log("Choose an option:");
  console.log("1. Add Package");
  console.log("2. Register Courier");
  console.log("3. Create Shipment");
  console.log("4. Get Shipment Status");
  console.log("5. Update Shipment Status");
  console.log("6. Get Courier Shipment Info");
  console.log("7. View All Package");
  console.log("8. Exit");

  rl.question("Enter your choice : ", (choice) => {
    switch (choice) {
      case "1":
        rl.question(
          "Enter package details (id, weight, destination): ",
          (details) => {
            const [id, weight, destination] = details.split(",");
            console.log({ id, weight, destination });

            const package = new Packages(id, weight, destination);
            shipping.addPackage(package);
            console.log("Package added.");
            mainMenu();
          }
        );
        break;
      case "2":
        rl.question(
          "Enter courier details (id, name, vehicle): ",
          (details) => {
            const [id, name, vehicle] = details.split(",");
            const courier = new Courier(id, name, vehicle);

            console.log(courier);

            shipping.registerCourier(courier.getCourierDetails());
            console.log("Courier registered.");
            mainMenu();
          }
        );
        break;
      case "3":
        rl.question(
          "Enter shipment details (id, package, status, courier): ",
          (details) => {
            const [id, packageId, status, courierId] = details.split(",");
            const shipment = new Shipment(id, packageId, status, courierId);
            shipping.createShippment(shipment.getShipmentDetails());
            console.log("Shipment created.");
            mainMenu();
          }
        );
        break;
      case "4":
        rl.question("Enter shipment ID to get status: ", (id) => {
          const status = shipping.getCurrentStatus(id);
          console.log(status);
          mainMenu();
        });
        break;
      case "5":
        rl.question("Enter shipment ID to update status: ", (id) => {
          const result = shipping.updateShippmentStatus(id);
          console.log(result);
          mainMenu();
        });
        break;
      case "6":
        rl.question("Enter shipment ID and courier ID: ", (details) => {
          const [shippmentId, courierId] = details.split(",");
          const info = shipping.courierShippmentInfo(shippmentId, courierId);
          console.log("Shipment and Courier Info:", info);
          mainMenu();
        });
        break;
      case "7":
        console.log(shipping.getAllPackage());

      case "8":
        rl.close();
        break;
      default:
        console.log("Invalid choice, please try again.");
        mainMenu();
        break;
    }
  });
};

mainMenu();
