import { Fragment } from 'react'
import { comparisonFeatures } from '@/data/pricing'
import { FadeUpAnimation } from '@/components/animations'
import { Check, X } from 'lucide-react'

const CellValue = ({ value }) => {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-primary" />
  }
  if (value === false) {
    return <X className="mx-auto h-5 w-5 text-paragraph/30" />
  }
  return <span className="font-medium">{value}</span>
}

const PricingComparison = () => {
  return (
    <section className="bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
      <div className="container">
        <FadeUpAnimation>
          <div className="mx-auto mb-12 max-w-[600px] text-center">
            <p className="section-tagline">Compare</p>
            <h2>How Affily Stacks Up</h2>
            <p className="mt-4 text-paragraph/70 dark:text-white/70">
              See how Affily compares to other Shopify affiliate marketing apps
            </p>
          </div>
        </FadeUpAnimation>

        <FadeUpAnimation>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-borderColour pb-4 text-left font-semibold dark:border-borderColour-dark">
                    Feature
                  </th>
                  <th className="border-b border-borderColour pb-4 text-center dark:border-borderColour-dark">
                    <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white">
                      Affily
                    </span>
                  </th>
                  <th className="border-b border-borderColour pb-4 text-center font-semibold dark:border-borderColour-dark">
                    UpPromote
                  </th>
                  <th className="border-b border-borderColour pb-4 text-center font-semibold dark:border-borderColour-dark">
                    GoAffPro
                  </th>
                  <th className="border-b border-borderColour pb-4 text-center font-semibold dark:border-borderColour-dark">
                    Refersion
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((group) => (
                  <Fragment key={group.category}>
                    <tr>
                      <td
                        colSpan={5}
                        className="pb-3 pt-8 text-xs font-bold uppercase tracking-wider text-paragraph/50 dark:text-white/50">
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feature) => (
                      <tr key={feature.name} className="group">
                        <td className="border-b border-borderColour py-4 text-paragraph/80 transition-colors group-hover:text-paragraph dark:border-borderColour-dark dark:text-white/80 dark:group-hover:text-white">
                          {feature.name}
                        </td>
                        <td className="border-b border-borderColour bg-primary/5 py-4 text-center dark:border-borderColour-dark dark:bg-primary/10">
                          <CellValue value={feature.affily} />
                        </td>
                        <td className="border-b border-borderColour py-4 text-center text-paragraph/80 dark:border-borderColour-dark dark:text-white/80">
                          <CellValue value={feature.uppromote} />
                        </td>
                        <td className="border-b border-borderColour py-4 text-center text-paragraph/80 dark:border-borderColour-dark dark:text-white/80">
                          <CellValue value={feature.goaffpro} />
                        </td>
                        <td className="border-b border-borderColour py-4 text-center text-paragraph/80 dark:border-borderColour-dark dark:text-white/80">
                          <CellValue value={feature.refersion} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default PricingComparison
