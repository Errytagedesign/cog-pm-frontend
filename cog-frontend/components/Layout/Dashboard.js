import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import { ReactSVG } from 'react-svg';
import styles from '../../src/styles/Dashboard.module.css'
import Head from 'next/head';

const Dashboard = ({ children }) => {

  const [expandedNav, setExpandedNav] = useState(true)

  const navDisplayHandler = () => setExpandedNav(!expandedNav)

  const navDisplay = expandedNav ? "block" : "hidden"

  console.log(expandedNav)
  return (
    <div className="flex">
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </Head>
      <nav className="flex">
        <div className={`h-[100vh] bg-primary overflow-y-auto py-4 pr-4 ${styles.dashboard_sidenav_scaffold}`}>
          <header>
            <figure className="pl-[10px] h-[80px]">
              <Image src="/assets/icons/Cog White logo.svg" width={111} height={80} alt="Logo" className={navDisplay} />
            </figure>
            <div className={`${styles.dashboard_nav_title} ${expandedNav ? "" : styles.expand_nav}`}>
              <ReactSVG src="/assets/icons/dashboard-icon.svg" />
              <h1 className={navDisplay}>Dashboard</h1>
            </div>
          </header>

          <div className={`${styles.dashboard_nav_links} ${expandedNav ? "" : styles.expand_nav}`}>
            <Link href="/">
              <ReactSVG src="/assets/icons/home-icon.svg" />
              <span>Home</span>
            </Link>

            <Link href="#" onClick={() => navDisplayHandler(false)}>
              <ReactSVG src="/assets/icons/agency-icon.svg" />
              <span>Agency</span>
            </Link>

            <Link href="/">
              <ReactSVG src="/assets/icons/manager-icon.svg" />
              <span>Manager</span>
            </Link>

            <Link href="/">
              <ReactSVG src="/assets/icons/crm-icon.svg" />
              <span>CRM</span>
            </Link>

            <Link href="/">
              <ReactSVG src="/assets/icons/back-office-icon.svg" />
              <span>Back Office</span>
            </Link>

            <Link href="/">
              <ReactSVG src="/assets/icons/settings-icon.svg" />
              <span>Settings</span>
            </Link>

            <hr className="border-t-2 ml-4 my-6 border-white" />

            <Link href="/">
              <ReactSVG src="/assets/icons/help-icon.svg" />
              <span>Help desk</span>
            </Link>

            <Link href="/">
              <ReactSVG src="/assets/icons/logout.svg" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
        {!expandedNav && <SubNav />}
      </nav>

      <div className="overflow-y-auto h-[100vh] flex-1">
        {children}
      </div>

    </div>
  )
}

export default Dashboard

const SubNav = () => {

  const [show, setShow] = useState(false)

  return (
    <nav className={`p-[20px] h-[100vh] bg-white border-2 border-[#62909F] overflow-y-auto ${styles.dashboard_sidenav_scaffold}`}>
      <div className="flex flex-col gap-y-4 mt-[120px]">
        <Link href="/prospects" className="text-[#B1B1B4] py-2 px-5 items-center flex gap-x-3">
          <ReactSVG src="/assets/icons/prospect-icon.svg" />
          <span>Prospects</span>
        </Link>
        <Link href="/marketplace" className="text-[#B1B1B4] py-2 px-5 items-center flex gap-x-3">
          <ReactSVG src="/assets/icons/marketplace-icon.svg" />
          <span>Marketplace</span>
        </Link>
        <Link href="/offers" className="text-[#B1B1B4] py-2 px-5 items-center flex gap-x-3">
          <ReactSVG src="/assets/icons/offer-icon.svg" />
          <span>Offers</span>
        </Link>
        <button className="border-[1px] text-primary border-primary rounded-[10px] py-2 px-5 items-center flex gap-x-3" onClick={()=> setShow(prev => !prev)}>
          <ReactSVG src="/assets/icons/onboarding-icon.svg" />
          <span>Onboarding</span>
          <span className="material-icons ml-auto"> {show ? "expand_more" : "expand_less"} </span>
        </button>
        <button className={`border-[1px] text-primary border-primary rounded-[10px] py-1 px-5 items-center flex gap-x-3 ${show ? "visible": "invisible"}`}>
          <ReactSVG src="/assets/icons/mail-send-icon.svg" />
          <span>Add new agreement</span>
        </button>
        <button className={`border-[1px] text-primary border-primary rounded-[10px] py-1 px-5 items-center flex gap-x-3 ${show ? "visible": "invisible"}`}>
          <ReactSVG src="/assets/icons/plus-icon.svg" />
          <span>View all agreements</span>
        </button>
      </div>
    </nav>
  )
}