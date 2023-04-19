import foward from "../public/assets/icons/foward.png";
import backward from "../public/assets/icons/backward.png";
import Backward from "./backward";
import Foward from "./foward";
const Pagination = ({ items, pageSize, currentPage, onPageChange, onPrev }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="w-4/5 m-auto text-xs text-lightGrey">
      <ul className="flex justify-end items-center">
        <span className="mr-8">Pages</span>{" "}
        <span onClick={() => onPrev(page)}>
          <Backward />
        </span>
        {pages.map((page) => (
          <li key={page} className="my-4 ">
            <a
              onClick={() => onPageChange(page)}
              className="cursor-pointe p-2 cursor-pointer text-black font-bold"
            >
              {page}
            </a>
          </li>
        ))}
        <span >
          <Foward />
        </span>
      </ul>
    </div>
  );
};

export default Pagination;
