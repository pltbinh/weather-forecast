import React, { useState } from 'react'
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import './Filter.css'

/**
 * Filter component which contains 1 simple text input
 *
 * @param {Function} onFilter      The callback function on form submitted
 * @param {Boolean}  loading       The loading state
 * @param {String}   underlineText The underline text display right bellow the entire component
 *
 * @returns {Component} The filter component
 */
export default function FilterComponent({ onFilter, loading, underlineText = '' }) {
  const [searchText, setSearchText] = useState()

  /**
   * Handles submit filter form
   *
   * @param {Event} e The event

   * @returns {Void}
   */
  const onSubmit = e => {
    e.preventDefault()
    onFilter(searchText)
  }

  /**
   * Handles search text change, update state accordingly
   *
   * @param {Event} e The event

   * @returns {Void}
   */
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col xs='12' md='12'>
          <Form.Group controlId='searchText'>
            <InputGroup className="mb-3">
              <Form.Control
                type='text'
                placeholder='Search here'
                onChange={handleChange}
              />
              <InputGroup.Append>
                <Button
                  id='btn-filter'
                  variant='primary'
                  type='submit'
                  disabled={loading}
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Text className="text-muted mb-3">
          {underlineText}
        </Form.Text>
      </Row>
    </Form>
  )
}