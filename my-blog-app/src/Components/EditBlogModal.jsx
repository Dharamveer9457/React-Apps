import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const [isModalOpen, setIsModalOpen] = useState(false);
const [modalBlogData, setModalBlogData] = useState({ title: '', image: '', date: '' });
const [editedBlogId, setEditedBlogId] = useState(null);

// EditBlogModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditBlogModal = ({ isOpen, onClose, blogData, onUpdate }) => {
  const [editedData, setEditedData] = useState(blogData);

  useEffect(() => {
    setEditedData(blogData);
  }, [blogData]);

  const handleUpdate = () => {
    onUpdate(editedData);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={editedData.title}
            onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={editedData.image}
            onChange={(e) => setEditedData({ ...editedData, image: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={editedData.date}
            onChange={(e) => setEditedData({ ...editedData, date: e.target.value })}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBlogModal;