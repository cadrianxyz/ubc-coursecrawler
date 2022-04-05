const Spinner = ({ center }) => {
  return (
    <>
      <div className={`spin ${center ? "spin-center" : ""}`} />
      <style jsx>{`
                @keyframes spinner {
                    0% {
                    transform: translate3d(-50%, -50%, 0) rotate(0deg);
                    }
                    100% {
                    transform: translate3d(-50%, -50%, 0) rotate(360deg);
                    }
                }
                .spin::before {
                    animation: 1.5s linear infinite spinner;
                    animation-play-state: inherit;
                    border: solid 5px #cfd0d1;
                    border-bottom-color: rgb(79 70 229);
                    border-radius: 50%;
                    content: "";
                    height: 40px;
                    width: 40px;
                    position: absolute;
                    top: 10%;
                    left: 10%;
                    transform: translate3d(-50%, -50%, 0);
                    will-change: transform;
                }
                .spin-center::before {
                    left: 50%;
                    top: 50%;
                }
            `}</style>
    </>
  );
};

export default Spinner;