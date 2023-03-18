const CoreValue = () => {
  const data = [
    {
      title: 'Dedication',
      text:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    },
    {
      title: 'Intellectual Honesty',
      text:
        'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.',
    },
    {
      title: 'Curiosity',
      text:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    },
  ]

  return (
    <div id='core' className="bg-broken-white pt-14">
      <div className="container mx-auto lg:flex lg:items-center">
        <div className="px-6">
          <h1 className="text-blue-title text-center lg:text-start">
            Our Core Values
          </h1>
          <p className="mt-6 leading-6 font-normal text-grey-p">
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit.
            <br />
            <br />
            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
            nec amet enim.
          </p>
        </div>
        <div className="mt-8 px-4 flex flex-col gap-y-6 lg:border-l-gray-500 lg:border-l">
          {data.map((d) => (
            <div key={d.title}>
              <div className="flex gap-4">
                <div className="h-0.5 w-6 bg-grey-p mt-5" />
                <div>
                  <h3>{d.title}</h3>
                  <p className="text-grey-p">
                    {d.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src="assets/core-value-mobile.png"
          alt="core-value"
          className="mt-7 block lg:hidden"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="assets/core-value.png"
          alt="core-value"
          className="mt-7 hidden lg:block w-1/2"
        />
      </div>
    </div>
  )
}

export default CoreValue
