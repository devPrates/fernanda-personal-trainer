import { Trophy, Dumbbell, User2 } from 'lucide-react'

export default function Features() {
  return (
    <section className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Fitness Zone?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            When picking a gym, consider its amenities like guest access, hours, location, and extra benefits to enhance your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience Trainers Card */}
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User2 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Experience Trainers</h3>
            <p className="text-gray-600">
              Experience trainers dolor sit amet volutpat. Cras eros nostrte nuctasse sed prom posuist solution saporing.
            </p>
          </div>

          {/* Modern Equipment Card */}
          <div className="p-6 text-center rounded-2xl border-2 border-purple-200 bg-white">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Dumbbell className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Equipment</h3>
            <p className="text-gray-600">
              Modern Equipment cras sit amet volutpat. Cret aos monste habitase sed prom volutaed sellctum eleging.
            </p>
          </div>

          {/* Award Winners Card */}
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Award Winners</h3>
            <p className="text-gray-600">
              Award Winners dost sit amet consectetur. Cret aos monste habitase sed proen habitase sed proen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



