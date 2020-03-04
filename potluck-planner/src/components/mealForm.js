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
