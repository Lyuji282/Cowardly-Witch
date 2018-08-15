import React from 'react'
import VersionView from './VersionView'
import Effect1 from './effects/Effect1'
import Effect2 from './effects/Effect2'
import Effect3 from './effects/Effect3'

export default () => (
  <div className="version-4">
    <VersionView version="4" />
    <div className="stage-1">
      <div className="stage-1__bg">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="stage-1__bg-effects">
        <Effect2 color="#fff" classname="eff-1" />
        <Effect2 color="#fff" classname="eff-2" />
        <Effect2 color="#fff" classname="eff-3" />
        <Effect2 color="#fff" classname="eff-4" />
      </div>
      <div className="stage-1__frame-effects">
        <Effect1 color1="#C45C66" color2="#283c5f" classname="eff-1" />
        <Effect1 color1="#C45C66" color2="#283c5f" classname="eff-2" />
        <Effect1 color1="#C45C66" color2="#283c5f" classname="eff-3" />
        <Effect1 color1="#C45C66" color2="#283c5f" classname="eff-4" />
      </div>
      <div className="stage-1__frame">
        <div className="dot">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="line">
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
      <div className="stage-1__star">
        <div></div><div></div><div></div>
      </div>
      <div className="stage-1__box">
        <div className="block">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="char">
          <div className="inner">
            <div></div><div></div><div></div>
          </div>
        </div>
        <div className="frame">
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
      <div className="stage-1__box-effects">
        <Effect3 color="#C45C66" classname="eff-1" />
        <Effect3 color="#C45C66" classname="eff-2" />
        <Effect3 color="#C45C66" classname="eff-3" />
      </div>
      <div className="stage-1__end">
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  </div>
)
