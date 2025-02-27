import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl mb-4">All Caterogy {categories.length} </h2>
            <div className="space-y-3">
                {categories.map(category => <div className="pl-4" key={category.id}>
                    <Link to={`/category/${category.id}`}> {category.name} </Link>
                </div>)}
            </div>
        </div>
    );
};

export default LeftSideNav;