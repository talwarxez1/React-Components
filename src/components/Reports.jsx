import React from 'react'

const Reports = () => {
  return (
    <section className="bg-gray-50 py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-gray-800">55%</div>
          <div className="mt-2 text-gray-600">Average Salary Hike</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-800">600+</div>
          <div className="mt-2 text-gray-600">Different Courses</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-800">12000+</div>
          <div className="mt-2 text-gray-600">Career Transitions</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-800">400+</div>
          <div className="mt-2 text-gray-600">Hiring Partners</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Reports
