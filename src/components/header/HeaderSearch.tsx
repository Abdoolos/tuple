interface DataType {
    searchClose?: () => void;
    openSearch?: boolean;
}

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const HeaderSearch = ({ searchClose, openSearch }: DataType) => {

    const handleSearch: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
    }

    return (
        <>
            <div className={`top-search ${openSearch ? "search-open " : "search-close"}`}>
                <div className="container">
                    <form onSubmit={handleSearch}>
                        <div className="input-group">
                            <span className="input-group-addon search-icon"><i className="fa fa-search"></i></span>
                            <input type="text" className="form-control" name='search' placeholder="Search" autoComplete='off' />
                            <span className="input-group-addon close-search" onClick={searchClose}><i className="fa fa-times"></i></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;