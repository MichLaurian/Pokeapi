import React from "react";

function Pagination(props) {
 const { onLeftclick, onRightClick, page, totalPages } = props;
 return (
  <div className="pagination">
   <button className='button__pagination' onClick={onLeftclick}>
    <div >ATRAS</div>
   </button>
   <div>
    {page} de {totalPages}
   </div>
   <button className='button__pagination' onClick={onRightClick}>
    <div >ADELANTE</div>{" "}
   </button>
  </div>
 );
}

export default Pagination;
