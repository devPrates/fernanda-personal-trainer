import { CheckCircle } from "lucide-react"


const tiers = [
  {
    name: 'Consultoria',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: 'R$ 109',
    description: "O plano perfeito se você está apenas começando.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Preços</h2>
        <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          O plano certo para você
        </p>
      </div>
      <div className="mx-auto mt-16 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-xl ">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="bg-white/60 sm:mx-8 lg:mx-0  rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
          >
            <h3
              
              className="text-indigo-600 text-base/7 font-semibold"
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className="text-5xl font-semibold tracking-tight"
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/mês</span>
            </p>
            <p className="text-gray-600 mt-6 text-base/7">
              {tier.description}
            </p>
            <ul
              role="list"
              className="text-gray-600 mt-8 space-y-3 text-sm/6 sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckCircle
                    aria-hidden="true"
                    className="text-violet-500 h-6 w-5 flex-none"/>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >    
              Comece agora mesmo!
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
