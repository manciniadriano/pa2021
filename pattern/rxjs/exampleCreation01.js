import { of, map, first, generate, pipe} from 'rxjs';

of(1, 2, 3, 4)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));


of(1, 2, 3)
  .pipe(first())
  .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1

const result = generate(0, x => x < 3, x => x + 1, x => x**2);
result.pipe(map(x => x**2)).subscribe(x => console.log(x));