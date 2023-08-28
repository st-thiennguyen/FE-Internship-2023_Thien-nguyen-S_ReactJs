import category01 from '../../../../assets/images/category-01.png';
import category02 from '../../../../assets/images/category-02.png';
import category03 from '../../../../assets/images/category-03.png';

const Category = () => {
  return (
    <>
      <section className='section section-categories'>
        <div className='container'>
          <ul className='category-list row'>
            <li className='category-item col col-6 col-sm-12'>
              <div className='category'>
                <img src={category01} aria-hidden alt='Image of category New arrivalsare' />
                <div className='category-content d-flex flex-column justify-end'>
                  <h4 className='category-title'>New arrivalsare now in!</h4>
                  <a href='/#' className='btn'>
                    Show collection
                  </a>
                </div>
              </div>
            </li>

            <li className='category-item col col-3 col-sm-6'>
              <div className='category'>
                <img
                  src={category02}
                  aria-hidden
                  alt='Image of category Basic t-shirts'
                />
                <div className='category-content d-flex flex-column justify-end'>
                  <h4 className='category-title'>Basic t-shirts $29,99</h4>
                  <a href='/#' className='btn'>
                    MORE DETAILS
                  </a>
                </div>
              </div>
            </li>

            <li className='category-item col col-3 col-sm-6'>
              <div className='category'>
                <img
                  src={category03}
                  aria-hidden
                  alt='Image of category Sale this summer'
                />
                <div className='category-content d-flex flex-column justify-end'>
                  <span className='bagde bagde-red'>- 50%</span>
                  <h4 className='category-title'>Sale this summer</h4>
                  <a href='/#' className='btn'>
                    VIEW ALL
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Category;
