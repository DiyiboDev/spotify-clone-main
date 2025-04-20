import { Playlist } from "../playlists/models/playlist.model"

/**
 * Fetch all playlists from the API.
 * @returns {Promise<Playlist[]>} An array of Playlist objects
 * @throws {Error} If the request fails
 */
export const fetchPlaylists = async() => {
  
  try {
    const response = await fetch('http://localhost:3020/playlists')

    if(!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch(error) {    
    throw error
  }
  
}


/**
 * Fetch a playlist by its ID from the API.
 * @param {string} [playlistId=2] The ID of the playlist to fetch
 * @returns {Promise<Playlist>} The fetched Playlist object
 * @throws {Error} If the request fails
 */
export const fetchPlaylistById = async( path = 'playlists', playlistId = 'arcane' ) => {

  try {
    const response = await fetch(`http://localhost:3020/${path}/${playlistId}`)

    if(!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch(error) {
    throw error
  }

}

export const fetchTracks = async( start, limit ) => {

  try {
    const response = await fetch(`http://localhost:3020/tracks?_start=${start}&_limit=${limit}`)

    if(!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch(error) {
    throw error
  }

}