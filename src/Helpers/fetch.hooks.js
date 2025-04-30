import { useEffect, useState } from "react";
import axios from 'axios'

//axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
axios.defaults.baseURL = 'https://hgfapi.xyz'
//axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://hgfapi.xyz'

export function useFetchBlogs(query){
    const [ blogPost, setBlogPost] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/blog/posts`) : await axios.get(`/blog/posts/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setBlogPost({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setBlogPost({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setBlogPost({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchBlogPost()
    }, [query])

    return blogPost
}

export function useFetchChildrenProgram(query){
    const [ childrenData, setChildrenData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchChildrenData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/children_corner`) : await axios.get(`/children_corner/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setChildrenData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setChildrenData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setChildrenData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchChildrenData()
    }, [query])

    return childrenData
}

export function useFetchBranches(query){
    const [ branchesData, setBranchesData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchBranchesData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/about_us/ministry_branches`) : await axios.get(`/about_us/ministry_branches/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setBranchesData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setBranchesData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setBranchesData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchBranchesData()
    }, [query])

    return branchesData
}

export function useFetchLeaders(query){
    const [ leadersData, setLeadersData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchLeadersData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/about_us/hgfpmi_leaders`) : await axios.get(`/about_us/hgfpmi_leaders/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setLeadersData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setLeadersData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setLeadersData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchLeadersData()
    }, [query])

    return leadersData
}

export function useFetchProducts(query){
    const [ productsData, setProductsData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/store/store`) : await axios.get(`/store/store/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setProductsData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setProductsData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setProductsData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchProductsData()
    }, [query])

    return productsData
}

export function useFetchMessages({ live }){
    const [ messagesData, setMessagesData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchMessagesData = async () => {
            try {
                const { data, status} = live ? await axios.get(`/sermon/liveteachings`) : await axios.get(`/sermon/past_teachings`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setMessagesData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setMessagesData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setMessagesData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchMessagesData()
    }, [live])

    return messagesData
}

export function useFetchVideoTestimonies(query){
    const [ videoTestimonies, setVideoTestionies] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchVideoTestimonies = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/programs/video-testimonies`) : await axios.get(`/programs/video-testimonies/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setVideoTestionies({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setVideoTestionies({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setVideoTestionies({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchVideoTestimonies()
    }, [query])

    return videoTestimonies
}

export function useFetchGallery(query){
    const [ gallery, setGallery] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/resources/gallery`) : await axios.get(`/resources/gallery/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setGallery({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setGallery({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setGallery({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchGallery()
    }, [query])

    return gallery
}

export function useFetchTestimonies(query){
    const [ testimonies, setTestionies] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchTestimonies = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/programs/testimonies`) : await axios.get(`/programs/testimonies/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setTestionies({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setTestionies({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setTestionies({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchTestimonies()
    }, [query])

    return testimonies
}