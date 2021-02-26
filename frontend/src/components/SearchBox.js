import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }
  return (
    <Form inline>
      <Form.Control onChange={(e) => setKeyword(e.target.value)} type="text" name="q" className="mr-sm-2 ml-sm-5" placeholder="搜索">
      </Form.Control>
      <Button type="submit" variant="success" className="p-2" onClick={onSearch}>搜索</Button>
    </Form>
  )
}

export default SearchBox
