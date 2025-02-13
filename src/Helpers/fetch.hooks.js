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