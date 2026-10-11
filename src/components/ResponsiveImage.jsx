export default function ResponsiveImage({
  image,
  alt,
  sizes,
  className,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  style,
  ...props
}) {
  return (
    <img
      {...props}
      className={className}
      src={image.src}
      srcSet={image.srcSet || undefined}
      sizes={image.srcSet ? sizes : undefined}
      alt={alt}
      width={image.width}
      height={image.height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      style={{ objectPosition: image.position ?? 'center', ...style }}
    />
  );
}
