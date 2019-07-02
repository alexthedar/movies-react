export default {
  app: {
    error: "",
    isFetching: false
  },
  movies: {
    moviesList: {
      1: [
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
      ],
      2: [
        {
          adult: false,
          id: 3,
          original_title: "Tomb 3",
          overview: "Lara 3",
          poster_path: "/tomb3.jpg",
          release_date: "2016-01-01",
          title: "Tomb 3"
        },
        {
          adult: false,
          id: 4,
          original_title: "Tomb 4",
          overview: "Lara 4",
          poster_path: "/tomb4.jpg",
          release_date: "2015-01-01",
          title: "Tomb 4"
        }
      ]
    }
  },
  search: { queryString: "raider", activePage: 1, totalPages: 2 }
};
