import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialPotluck = {
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    dishes: [],
    guests: []
}

Feature                | Method | URL                         |
| :--------------------- | :----- | :------------------------   |
| Login                  | POST   | /api/login                  |
| Register               | POST   | /api/register               |
| List of potlucks       | GET    | /api/potlucks               |
| Specific potluck       | GET    | /api/potlucks/:id           |
| Add a potluck          | POST   | /api/potluck                |
| Update a potluck       | PUT    | /api/potluck/:id/organizers |
| Add a guest            | POST   | /api/potluck/:id/guest      |
| Delete a potluck       | DEL    | /api/potluck/:id            |
| Remove a guest         | DEL    | /api/:meal/:id              |
| Select an item to bring| POST   | /api/:id/claim              |