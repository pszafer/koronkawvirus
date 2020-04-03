import React from "react"
import { Link } from "gatsby"

export default ({ numPages, currentPage }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const baseClasses =
    "button bg-gray-400 border mx-1 border-gray-500 py-2 px-4 opacity-85"
  const curPageClasses = baseClasses + " bg-gray-600"
  const linkClasses = baseClasses + " hover:bg-gray-800"
  return (
    <>
      <hr className="w-full border-gray-500 mt-6" />
      <div className="flex mx-auto pt-2 text-2xl">
        <ul className="pagination flex justify-between mx-4 mt-4 list-reset text-white font-bold">
          <li className="flex-1">
            {isFirst ? (
              <span className={baseClasses}>←</span>
            ) : (
              <Link to={prevPage} rel="prev" className={linkClasses}>
                ←
              </Link>
            )}
          </li>
          {Array.from({ length: numPages }, (_, i) => {
            const isCurrent = i === currentPage - 1
            return (
              <li key={`pagination-number${i + 1}`} className="flex-1">
                {isCurrent ? (
                  <span className={curPageClasses}>{i + 1}</span>
                ) : (
                  <Link to={`/${i === 0 ? "" : i + 1}`} className={linkClasses}>
                    {i + 1}
                  </Link>
                )}
              </li>
            )
          })}
          <li className="flex-1">
            {isLast ? (
              <span className={baseClasses}>→</span>
            ) : (
              <Link to={nextPage} rel="next" className={linkClasses}>
                →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  )
}
