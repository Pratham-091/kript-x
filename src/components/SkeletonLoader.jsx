import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-8 animate-pulse mt-10">
      <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto mt-4"></div>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-slate-100 h-64 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-slate-200 rounded w-full"></div>
                <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                <div className="h-3 bg-slate-200 rounded w-4/6"></div>
              </div>
            </div>
            <div className="h-10 bg-slate-200 rounded w-full mt-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
