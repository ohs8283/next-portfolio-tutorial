import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          아령하세여 하잇!
          <br className="hidden lg:inline-block" />
          오늘도 화이팅!
        </h1>
        <p className="mb-8 leading-relaxed">
          위에 파란 옥 겨울이 버리었습니다. 가난한 어머니 마디씩 써 슬퍼하는
          버리었습니다. 잠, 소녀들의 밤이 벌레는 별 당신은 덮어 내일 이웃
          봅니다. 밤을 위에 덮어 때 이름을 위에 써 새겨지는 내일 계십니다. 별
          벌써 써 딴은 이런 별 옥 나의 봅니다. 애기 보고, 노새, 하나에 별 위에
          강아지, 계집애들의 까닭입니다. 이름자를 이런 라이너 밤이 덮어 별빛이
          나의 이름자 아이들의 거외다. 별 별에도 이름과, 내린 이 내일 계십니다.
          이름과, 잔디가 하나에 아침이 마리아 내 나의 옥 봅니다.
        </p>
        <div className="flex justify-center">
          <Link className="btn-project" href="/projects">
            프로젝트 보로가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
