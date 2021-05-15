import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Polyline, usePolyline } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Polyline/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    Polyline,
    usePolyline,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/Polyline/README.md');
}
