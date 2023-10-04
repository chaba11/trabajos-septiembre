import React from "react";
import Usuarios from "../usuariosComponent/Usuarios.jsx";

const Users = {
  results: [
    {
      gender: "female",
      name: { title: "Ms", first: "Holly", last: "Turner" },
      location: {
        street: { number: 7808, name: "Totara Avenue" },
        city: "Greymouth",
        state: "Bay of Plenty",
        country: "New Zealand",
        postcode: 17596,
        coordinates: { latitude: "48.0178", longitude: "150.6601" },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "holly.turner@example.com",
      login: {
        uuid: "6cb7ce31-1a54-4b30-9ec2-c7cf3a3cf1c1",
        username: "blackrabbit506",
        password: "rubble",
        salt: "NuqQlbt6",
        md5: "a876e2cbed55fbee79ca5dcc1babb1b4",
        sha1: "6942dc7c432da3759d21b6fe7870d3602f15a103",
        sha256:
          "1df521a56e71c3b2dcb03c601f55347f3e93f58be3fdfdf06f3a243c1657d8f9",
      },
      dob: { date: "1988-05-27T00:52:44.507Z", age: 35 },
      registered: { date: "2021-10-25T11:12:02.030Z", age: 1 },
      phone: "(628)-907-0678",
      cell: "(454)-902-6505",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/women/20.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Jacob", last: "White" },
      location: {
        street: { number: 6678, name: "Dickens Street" },
        city: "Masterton",
        state: "Gisborne",
        country: "New Zealand",
        postcode: 46320,
        coordinates: { latitude: "35.6377", longitude: "93.0253" },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "jacob.white@example.com",
      login: {
        uuid: "d787f04a-808c-408d-ba36-36f17120c0c7",
        username: "heavyladybug121",
        password: "ryan",
        salt: "7eEhjbXc",
        md5: "e55febf6a039ac534a1512c55084bff8",
        sha1: "d15296aea804776c48fcf4fb1d0f077449723a9d",
        sha256:
          "8c7800299f35400ea66b8e9c3776c5498dd11a2b13f041dc9c250924e3947237",
      },
      dob: { date: "1947-01-21T18:51:14.453Z", age: 76 },
      registered: { date: "2015-12-01T15:51:56.706Z", age: 7 },
      phone: "(100)-320-6234",
      cell: "(869)-490-2262",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/91.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Kadir", last: "Kasapoğlu" },
      location: {
        street: { number: 204, name: "Kushimoto Sk" },
        city: "Niğde",
        state: "Sivas",
        country: "Turkey",
        postcode: 25354,
        coordinates: { latitude: "-4.5709", longitude: "-171.2960" },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "kadir.kasapoglu@example.com",
      login: {
        uuid: "0ae21163-0a44-46da-b6e1-4493d377603a",
        username: "silverpeacock288",
        password: "newpass",
        salt: "UeVoHVSV",
        md5: "586233ecd22e6f663b379f9c9a286f14",
        sha1: "e190b90e1a17bd6f8f6b24f64b0debeda6261756",
        sha256:
          "3145493f03bb4a74734efe151c700d5b26dc7de4c097b3bcbaecd55e385af60e",
      },
      dob: { date: "1997-03-15T23:13:55.127Z", age: 26 },
      registered: { date: "2020-05-08T13:06:12.229Z", age: 3 },
      phone: "(424)-180-3169",
      cell: "(561)-648-2350",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      },
      nat: "TR",
    },
  ],
  info: { seed: "f9a04310e36b1424", results: 3, page: 1, version: "1.4" },
};

const verUsuarioComponent = () => {
  return (
    <>
      <div>
        {Users.map((Usuarios) => {
          <Usuarios name={Users.name} email={Users.email} city={Users.city} />;
        })}
      </div>
    </>
  );
};

export { verUsuarioComponent };
