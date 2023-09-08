import React, { useEffect, useState } from 'react';
import * as api from 'api/api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';

function MovieDetailsPage() {
  return (
    <div>
      MovieDetailsPage
      <Routes>
        <Route path="Cast" element={<Cast />} />
        <Route path="Reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default MovieDetailsPage;
