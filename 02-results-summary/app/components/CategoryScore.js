import data from './data.json';
import Image from 'next/image';

export default function CategoryScore() {
  return (
    <div>
      <div key={data[0].category} className={`bg-light-red/10 w-72 flex justify-between p-4 mx-auto mb-3 rounded-xl hover:bg-light-red/20 transition-all`}>
        <Image src={data[0].icon} width={100} height={100} className='w-5 mr-3' alt={`${data[0].category} category icon`} />
        <p className={`text-light-red font-semibold mr-auto`}>{data[0].category}</p>
        <h4 className={`mx-2`}><strong>{data[0].score}</strong></h4>
        <p className={`text-neutral-dark-gray-blue/60`}><strong>/ 100</strong></p>
      </div>
      <div key={data[1].category} className={`bg-orangey-yellow/10 w-72 flex justify-between p-4 mx-auto mb-3 rounded-xl hover:bg-orangey-yellow/20 transition-all`}>
        <Image src={data[1].icon} width={100} height={100} className='w-5 mr-3' alt={`${data[1].category} category icon`} />
        <p className={`text-orangey-yellow font-semibold mr-auto`}>{data[1].category}</p>
        <h4 className={`mx-2`}><strong>{data[1].score}</strong></h4>
        <p className={`text-neutral-dark-gray-blue/60`}><strong>/ 100</strong></p>
      </div>
      <div key={data[2].category} className={`bg-green-teal/10 w-72 flex justify-between p-4 mx-auto mb-3 rounded-xl hover:bg-green-teal/20 transition-all`}>
        <Image src={data[2].icon} width={100} height={100} className='w-5 mr-3' alt={`${data[2].category} category icon`} />
        <p className={`text-green-teal font-semibold mr-auto`}>{data[2].category}</p>
        <h4 className={`mx-2`}><strong>{data[2].score}</strong></h4>
        <p className={`text-neutral-dark-gray-blue/60`}><strong>/ 100</strong></p>
      </div>
      <div key={data[3].category} className={`bg-cobalt-blue/10 w-72 flex justify-between p-4 mx-auto mb-3 rounded-xl hover:bg-cobalt-blue/20 transition-all`}>
        <Image src={data[3].icon} width={100} height={100} className='w-5 mr-3' alt={`${data[3].category} category icon`} />
        <p className={`text-cobalt-blue font-semibold mr-auto`}>{data[3].category}</p>
        <h4 className={`mx-2`}><strong>{data[3].score}</strong></h4>
        <p className={`text-neutral-dark-gray-blue/60`}><strong>/ 100</strong></p>
      </div>
    </div>
  );
}