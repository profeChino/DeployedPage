import React from 'react'
import { Input, Button, Card, Col, Row } from 'antd';
import { useState, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons';
import './Spotify.css'
import PropTypes from 'prop-types' 

const { Meta } = Card;

const CLIENT_ID = '46f399c6408a40d8b9e357619b046c50';
const CLIENT_SECRET = 'f37c17db9a2a4e9180983a183c9f5faa'

export const Spotify = ({titulo}) => {

    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);
    
    useEffect(()=>{
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    },[])

    const buscar = async () => {
        console.log("Search for " + searchInput);

        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

        var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(resp => resp.json())
            .then(data => { return data.artists.items[0].id })

        console.log("Artist ID is " + artistID);
        var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
            .then(resp => resp.json())
            .then(data => { console.log(data); setAlbums(data.items) })
    }

    console.log(albums);

  return (
    <>
        <br /><br />
        <h1 className='h1-album'>
            {titulo}
        </h1>
        <br />
        <br />
        <div className='spotify-app'>
            <div className='search-bar'>
                <Input placeholder="Busca un artista" onKeyDown={event=>{
                    if(event.key == "Enter")
                    {
                        buscar()
                    }
                }}
                onChange={event=>setSearchInput(event.target.value)}
                />
            </div>
            
            <br />

            <div className='buscar-button'>
                <Button type="primary" icon={<SearchOutlined />} onClick={buscar}>
                    Buscar
                </Button>
            </div>
            <br /> <br />
            <div className='card-container'>
                <Row gutter={[40, 40]}>
                        {albums.map((album, i) => {
                            console.log(album);
                            return(
                            <Col span={6}>
                                <Card style={{ width: 300, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} cover={<img alt="cover" src={album.images[0].url} />}>
                                    <Meta title={album.name} />
                                </Card>
                            </Col>
                            ) 
                        })}
                </Row>
            </div>
        </div>

    </>
  )
}

Spotify.propTypes = {
    titulo: PropTypes.string.isRequired
}
