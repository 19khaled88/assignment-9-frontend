'use client'
import BannerPage from '@/components/ui/Banner'
import Banners from '@/components/ui/Banners'
import Upcomming from '@/components/ui/Upcamming'

import Featuristics from '@/components/ui/Featuristics'
import GameTypePage from '@/components/ui/GamyType'
import News from '@/components/ui/News'
import OfferPage from '@/components/ui/Offers'
import Reviews from '@/components/ui/Reviews'
import Turfs from '@/components/ui/Turfs'
import Vidoe from '@/components/ui/Vidoe'
// import Videos from '@/components/ui/videos'

export default function Home() {
  return (
    <main>
      <BannerPage />
      <Turfs />
      <GameTypePage />
      <OfferPage />
      <Featuristics />
      <Upcomming />
      {/* <Videos /> */}
      <Vidoe />
      <News />
      <Reviews />
    </main>


  )
}
