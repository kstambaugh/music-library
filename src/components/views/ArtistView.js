import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])
    let [justAlbums, setJustAlbums] = useState([])
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
            setJustAlbums(artistData.filter(entry => entry.collectionType === 'Album'))
        }
        fetchData()
    }, [id])
    // const justAlbums = artistData.filter(entry => entry.kind === 'album')

    console.log(justAlbums, artistData)

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <p>{album.collectionName}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
            {renderAlbums}
        </div>
    )

}

export default ArtistView