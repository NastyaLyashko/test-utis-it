import { FETCH_IP, FETCH_CITY, FETCH_STREETS, CLEAN_STREETS, SET_ERROR, CLEAN_ERROR } from './actions'

export function setIp (data) {
    return {
        type: FETCH_IP,
        value: data.ip
    }
}

export function setCity (data) {
    return {
        type: FETCH_CITY,
        value: data.location.data.city
    }
}

export function fetchStreets (data) {
    return {
        type: FETCH_STREETS,
        value: data
    }
}

export function cleanStreets () {
    return {
        type: CLEAN_STREETS
    }
}

export function setError () {
    return {
        type: SET_ERROR
    }
}

export function cleanError () {
    return {
        type: CLEAN_ERROR
    }
}