import { fastify } from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*", // allow all origins
  methods: ["GET", "POST", "PUT", "DELETE"],
});

const teams = [
  {
    id: 1,
    name: "Team Ferrari",
    base: "Maranello, Italy",
  },
  {
    id: 2,
    name: "Team Williams",
    base: "Grove, United Kingdom",
  },
  {
    id: 3,
    name: "Team Mercedes",
    base: "Brackley, United Kingdom",
  },
  {
    id: 4,
    name: "Team Red Bull",
    base: "Milton Keynes, United Kingdom",
  },
  {
    id: 5,
    name: "Team McLaren",
    base: "Woking, United Kingdom",
  },
  {
    id: 6,
    name: "Team Renault",
    base: "Enstone, United Kingdom",
  },
  {
    id: 7,
    name: "Team AlphaTauri",
    base: "Faenza, Italy",
  },
  {
    id: 8,
    name: "Team Alfa Romeo",
    base: "Hinwil, Switzerland",
  },
  {
    id: 9,
    name: "Team Haas",
    base: "Kannapolis, United States",
  },
  {
    id: 10,
    name: "Team Aston Martin",
    base: "Silverstone, United Kingdom",
  },
];

const drivers = [
  {
    id: 1,
    name: "Driver Michael Schumacher",
    team: "Team Ferrari",
  },
  {
    id: 2,
    name: "Driver Rubens Barrichello",
    team: "Team Ferrari",
  },
  {
    id: 3,
    name: "Driver George Russell",
    team: "Team Williams",
  },
  {
    id: 4,
    name: "Driver Felipe Massa",
    team: "Team Williams",
  },
  {
    id: 5,
    name: "Driver Lewis Hamilton",
    team: "Team Mercedes",
  },
  {
    id: 6,
    name: "Driver Valtteri Bottas",
    team: "Team Mercedes",
  },
  {
    id: 7,
    name: "Driver Max Verstappen",
    team: "Team Red Bull",
  },
  {
    id: 8,
    name: "Driver Sergio Perez",
    team: "Team Red Bull",
  },
  {
    id: 9,
    name: "Driver Ayrton Senna",
    team: "Team McLaren",
  },
  {
    id: 10,
    name: "Driver Lando Norris",
    team: "Team McLaren",
  },
  {
    id: 11,
    name: "Driver Fernando Alonso",
    team: "Team Renault",
  },
  {
    id: 12,
    name: "Driver Daniel Ricciardo",
    team: "Team Renault",
  },
  {
    id: 13,
    name: "Driver Pierre Gasly",
    team: "Team AlphaTauri",
  },
  {
    id: 14,
    name: "Driver Yuki Tsunoda",
    team: "Team AlphaTauri",
  },
  {
    id: 15,
    name: "Driver Kimi Raikkonen",
    team: "Team Alfa Romeo",
  },
  {
    id: 16,
    name: "Driver Antonio Giovinazzi",
    team: "Team Alfa Romeo",
  },
  {
    id: 17,
    name: "Driver Romain Grosjean",
    team: "Team Haas",
  },
  {
    id: 18,
    name: "Driver Kevin Magnussen",
    team: "Team Haas",
  },
  {
    id: 19,
    name: "Driver Sebastian Vettel",
    team: "Team Aston Martin",
  },
  {
    id: 20,
    name: "Driver Lance Stroll",
    team: "Team Aston Martin",
  },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);

  return { drivers };
});

interface DriverParams {
  id: string;
  name: string;
  team: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const driver = drivers.find((driver) => driver.id === id);

  if (!driver) {
    response.type("application/json").code(404);
    return { message: "Driver not found" };
  } else {
    response.type("application/json").code(200);
    return { driver };
  }
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
