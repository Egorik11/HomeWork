import Link from "next/link";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div className="container">
      <Button variant="contained">
        <Link href="/users">
          <a>Перейти на страницу пользователей</a>
        </Link>
      </Button>
    </div>
  );
}
