function EditIcon({text}){
    return(
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil-minus" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#16a34a" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
                <path d="M16 19h6" />
            </svg>
        </button>
    )
}

export {EditIcon};