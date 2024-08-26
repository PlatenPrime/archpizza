import { Container, Title, Categories, SortPopup, TopBar } from "@/components/shared";
import { Button } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title
          text="Всі піци"
          size="lg"
          className="font-extrabold"

        />

      </Container>
      <TopBar />

      <Container
        className="pb-14"
      >
        <div
          className="flex gap-[60px]"
        >
          {/* Фильтрация */}
          <div className="w-[250px">
            {/* <Filters /> */}
          </div>


          {/* Список товара */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товара
            </div>
          </div>

        </div>

      </Container>

    </>
  );
}
