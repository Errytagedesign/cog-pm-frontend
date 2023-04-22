import { useRouter } from "next/router";
import Backward from "./backward";
import Foward from "./foward";
const Pagination = ({ items, pageSize, currentPage, onPageChange, onPrev }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10
  const router = useRouter()
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="w-4/5 m-auto text-xs text-lightGrey my-6">
      <ul className="flex justify-end items-center">
        <span className="mr-8">Pages</span>{" "}
        <span onClick={() => onPageChange(currentPage >=1 ? currentPage-1 : currentPage)}>
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
        <span onClick={() => onPageChange(currentPage+1)}>
          <Foward />
        </span>
      </ul>
    </div>
  );
};

export default Pagination;
