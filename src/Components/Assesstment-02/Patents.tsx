import './Patents.css'


import { useEffect, useState } from "react";

type Patent = {
    patent_number: string,
    patent_date: string,
    patent_title: string
};

type url = {
    baseUrl: string;
};

function Patents({ baseUrl }: url) {
    const [patents, setPatents] = useState<Patent[]>([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

    useEffect(() => {
        if (!isSearch) {
            fetchData(page);
        }
    }, [page, isSearch]);

    const fetchData = async (page: number, patentNumber?: string) => {
        try {
            setIsLoading(true);
            let url = `${baseUrl}?q=%7B"_gte":%7B"patent_date":"2007-01-04"%7D%7D&f=["patent_number","patent_date","patent_title"]&o={"page":${page}}`;
            if (patentNumber) {
                url = `${baseUrl}?q={"patent_number":"${patentNumber}"}&f=["patent_number","patent_date","patent_title"]`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setPatents(data.patents);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        setIsSearch(true);
        fetchData(1, searchTerm);
    };

    return (
        <div>
            <div className='input-container'>
                <input className='input-field'
                    type="text"
                    placeholder="Enter patent number"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='search-btn' onClick={handleSearch}>Search</button>
            </div>
            <div  className='table-container'>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <table>
                        <thead>
                        <tr className='table-data'>
                            <th style={{width: '200px'}}>Patent Number</th>
                            <th style={{ width: '150px' }}>Patent Date</th>
                            <th style={{ width: '400px' }}>Patent Title</th>
                        </tr>
                        </thead>
                        <tbody>
                        {patents.map((p) => (
                            <tr className='table-data' key={p.patent_number}>
                                <td style={{textAlign: "center"}}>{p.patent_number}</td>
                                <td style={{textAlign: "center"}}>{p.patent_date}</td>
                                <td style={{textAlign: "center"}}>{p.patent_title}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className='pagination'>
                <button className='previous-btn' onClick={() => { setPage(prev => Math.max(prev - 1, 1)); setIsSearch(false); }} disabled={page === 1 || isLoading}>
                    Previous
                </button>
                <span className='info'>Page {page}</span>
                <button className='next-btn' onClick={() => { setPage(prev => prev + 1); setIsSearch(false); }} disabled={isLoading}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Patents;
