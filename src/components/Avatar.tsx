type AvatarProps = {
  name: string;
};

export const Avatar = ({ name }: AvatarProps) => {
  const getAvatarLetters = () => {
    const parts = name.split(" ");
    if (parts.length > 1) {
      return parts[0][0] + parts[1][0];
    } else if (name.length > 1) {
      return name[0] + name[1];
    } else {
      return name[0];
    }
  };

  return (
    <div
      className={
        "flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-neutral-850"
      }
    >
      {getAvatarLetters().toUpperCase()}
    </div>
  );
};
