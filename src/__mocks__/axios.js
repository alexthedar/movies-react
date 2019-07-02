import { JestEnvironment } from "@jest/environment";

export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        page: 1,
        total_pages: 2,
        results: [
          {
            adult: false,
            id: 1,
            original_title: "Tomb 1",
            overview: "Lara 1",
            poster_path: "/tomb1.jpg",
            release_date: "2018-01-01",
            title: "Tomb 1"
          },
          {
            adult: false,
            id: 2,
            original_title: "Tomb 2",
            overview: "Lara 2",
            poster_path: "/tomb2.jpg",
            release_date: "2017-01-01",
            title: "Tomb 2"
          }
        ]
      }
    })
  )
};
