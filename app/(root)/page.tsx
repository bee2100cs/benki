import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { 
    firstName: "Bryan", 
    lastName: "Muchai",
    email: "muchai@bee.eth"
  };

  return (
    
      <section className="home">
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and manage your account and
              transactions efficiently."
            />

            <TotalBalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1503.22}
            />
          </header>

          RECENT TRANSACTIONS
        </div>

        <RightSidebar 
          user={loggedIn} 
          transactions={[]} 
          banks={[{ currentBalance: 710.50 }, {currentBalance: 650.50}]} 
        />
      </section>
    )
  
}

export default Home