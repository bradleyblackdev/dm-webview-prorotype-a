import React, {useEffect, useState} from 'react';
// import './assets/scss/styles.scss';
// import { Route, Switch, withRouter  } from "react-router-dom";
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import './Meh.css'
import './MegaTemplate.css'
// import Header from './components/Header';
// import Home from './pages/Home';
// import Yellow from './pages/Yellow';
// import Red from './pages/Red';
// import Green from './pages/Green';
// import Blue from './pages/Blue';
// import Purple from './pages/Purple';

// const pages = [
//     { path: '/', name: 'home', order: 1 },
//     { path: '/yellow', name: 'yellow', order: 2 },
//     { path: '/red', name: 'red', order: 3 },
//     { path: '/green', name: 'green', order: 4 },
//     { path: '/blue', name: 'blue', order: 5 },
//     { path: '/purple', name: 'purple', order: 6 }
// ]

const Meh = () => {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         currentPage: this.setPage(this.props.location.pathname),
    //         curPageOrder: this.setCurrentOrder(this.props.location.pathname),
    //         newPageOrder: null
    //     }
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log('Component did update');
       
    //     let newPage = this.setPage(this.props.location.pathname);
    //     let newPageOrder = pages.filter(function (page) {
    //         return page.name === newPage;
    //     });

    //     let curPage = this.state.currentPage;
    //     let curPageOrder = pages.filter(function (page) {
    //         return page.name === curPage;
    //     });

    //     if( newPage !== curPage){
    //         console.log('new page');
    //         let direction = curPageOrder[0].order < newPageOrder[0].order ? 'left' : 'right';
    //         // Set State
    //         this.setState({
    //             currentPage: newPage,
    //             pageDirection: direction,
    //             curPageOrder: curPageOrder[0].order,
    //             newPageOrder: newPageOrder[0].order,
    //         })
           
    //     }
        
    // }

    const [page, setPage] = useState(1)
    // const [forward, setForward] = useState("right")

    useEffect(() => {

    }, [])

    // setCurrentOrder = (path) => {
    //     let curPageOrder = pages.filter(function (page) {
    //         return page.path === path;
    //     });
        
    //     return curPageOrder[0].order;
    // }

    // render() {
        // const { location } = this.props;
        // const currentKey = location.pathname.split("/")[1] || "/";


        return (
            <div className={`wrapper`}>
                {/* <Header /> */}
                <div className={`wrap ${page} `}>
                    <TransitionGroup  className={`transition-group ${page === 1 ? "right" : "left"}`}>
                        <CSSTransition
                            key={page}
                            timeout={{ enter: 0, exit: 400 }}
                            classNames={'transition-wrap'}
                            
                        >
                            
                            <section className={`route-section fade`}>
                                {page === 1 &&
                                <div className="page">
                                    <div className='page-header'/>
                                    <div className="page-body">
                                        <p onClick={ () => setPage(2) }>this is page one</p>
                                    </div>
                                </div>
                                }
                                {page === 2 &&
                                <div className="page">
                                    <div className='page-header'/>
                                    <div className="page-body">
                                        <p onClick={ () => setPage(1) }>this is page two</p>
                                    </div>
                                </div>
                                }
                            </section>
                           
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        )
    // }
}
export default Meh;
