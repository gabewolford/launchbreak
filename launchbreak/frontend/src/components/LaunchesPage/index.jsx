import { useState, useEffect } from "react"
import { getData } from "../../../utils/api";
import LaunchCard from "../LaunchCard"
import LoadingSpinner from "../LoadingSpinner"

export default function LaunchesPage({ setDetailPage, setAuthenticated }) {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(6)
  const [launches, setFetchedLaunches] = useState([])

  useEffect(() => {
    const url = `https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=${perPage}&offset=${(page - 1) * perPage}`;
    getData(url)
        .then(res => {
            setFetchedLaunches(prevLaunches => [...prevLaunches, ...res.results]);
        })
    }, [page, perPage])

  useEffect(() => {
    setAuthenticated(localStorage.getItem('userToken') ? true : false);
  }, [setAuthenticated]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    const nextOffset = nextPage * perPage;
    const url = `https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=${perPage * 3}&offset=${nextOffset}`;

    getData(url)
      .then(res => {
        setFetchedLaunches(prevLaunches => [...prevLaunches, ...res.results]);
        setPage(nextPage);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getPaginatedLaunches = () => {
    const startIndex = (page - 1) * perPage;
    const endIndex = launches.length < page * perPage ? launches.length : page * perPage;
    return launches.slice(startIndex, endIndex);
  };

  const paginatedLaunches = getPaginatedLaunches();

  let prevButton
  if (page === 1) {
    prevButton = <button className="bg-none text-transparent px-2 py-1 rounded cursor-default text-2xl" onClick={handlePrevPage}>⇠</button>
  } else if (page > 1) {
    prevButton = <button className="bg-blue-800 px-2 py-1 rounded hover:bg-blue-700 text-2xl" onClick={handlePrevPage}>⇠</button>
  }



  return (
    <>
      <div className="mx-6 md:mx-12 lg:w-[70vw] lg:mx-auto">
        <h1 className="mt-6 mb-12 text-3xl font-bold text-white">Upcoming Launches</h1>
        <div className="grid grid-cols-1 lg:w-[70vw] mx-auto">
          {paginatedLaunches.length > 0 ? (
            paginatedLaunches.map((launch, i) => (
              <LaunchCard key={i} launchData={launch} setDetailPage={setDetailPage} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
        <div className="mt-5 flex justify-between">
          {prevButton}
          <button className="bg-blue-800 px-2 py-1 rounded hover:bg-blue-700 text-2xl" onClick={handleNextPage}>⇢</button>
        </div>
      </div>
    </>
  );
}
