const Pagination= ({totaldata, pokeperpage, setPage}) =>{ 
    let pages = []
    
    const pagesLength = Math.ceil(totaldata/pokeperpage)


    for(let i=1;i<= pagesLength;i++){
        pages.push(i)
    }
    return(
        <div className="text-center">
            {
    pages.map((page, i) =>{
                return (
                <button className="button-pagination btn btn-light" key={i} onClick={() => setPage(page)}>{page}</button>
                )
            })}
        </div>
    )
}

export default Pagination