import RightArrow from '../svg/RightArrow.astro'
import CustomButton from '../utils/CustomButton.astro'
import View from '../utils/View.astro'
import StatCard from './stat/StatCard.astro'

export const StatLandingSection = () => {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 })
    return () => controls.stop()
  }, [])

  return (
    <View bg="bg-[#f9f9f9]">
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 md:gap-x-10 md:flex-row md:flex-wrap lg:gap-x-18">
          <StatCard
            title="Chiffre d'affaire"
            content="322k"
            subText="Comparé à 2024"
          />
          <StatCard
            title="Partenaires actifs"
            content="31"
            subText="+200% Comparé à l’an dernier"
          />
          <StatCard
            title="Missions"
            content="182"
            subText="+22 Comparé à l’an dernier"
          />
        </div>
        <div className="flex w-full justify-center items-center pt-12 md:pt-24">
          <CustomButton
            text="Plus de chiffres"
            link="a-propos"
            classNameName="primary"
          >
            <RightArrow />
          </CustomButton>
        </div>
      </div>
    </View>
  )
}
