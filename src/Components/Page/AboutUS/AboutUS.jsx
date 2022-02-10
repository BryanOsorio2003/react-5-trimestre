import React from 'react'
import { ContainerButtons } from '../../Layouts/Container Buttons/ContainerButtons'
import { ContainerButtonsAboutUS } from '../../Layouts/ContainerButtonsAboutUS/ContainerButtonsAboutUS'
import { ContainerTittleAboutsUS } from '../../Layouts/ContainerTittleAboutsUS/ContainerTittleAboutsUS'
import { Images } from '../../UI/Images/Images'


export const AboutUS = () => {
  return (
    <div>
      <ContainerButtons />
      <ContainerTittleAboutsUS />
      <Images />
      <ContainerButtonsAboutUS />
    </div>
  )
}
