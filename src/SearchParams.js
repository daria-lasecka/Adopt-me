import { useState } from "react";

const SearchParams = () => {
    //const [location, setLocation] = useState("Seattle, WA")
    const locationTuple = useState("Seattle, WA")
    const location = locationTuple[0];
    const setLocation = locationTuple[1];

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Location" />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default SearchParams;