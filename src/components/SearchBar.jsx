import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton  } from "@mui/material"
import {Search}  from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return <Paper 
  sx={{ borderRadius: 20, border: '1px solid #e3e3e3',
 pl: 1, boxShadow: 'none', mr: { sm: 5 }} }
  component="form" onSubmit={handleSubmit}>

        <input className="search-bar" 
        placeholder="Search..." value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
        <IconButton type="submit" sx={{ p: '10px', color: 'red'}}>
            <Search />
        </IconButton>
  </Paper>
}

export default SearchBar
